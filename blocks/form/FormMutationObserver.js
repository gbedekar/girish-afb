export default class FormMutationObserver {
  constructor(targetNode, data) {
    this.targetNode = targetNode;
    this.observer = new MutationObserver(this.handleMutation.bind(this));
    this.data = data;
    targetNode.setAttribute('itemid', this.generateItemId());
    targetNode.setAttribute('itemtype', 'container');
    targetNode.setAttribute('itemscope', '');
    targetNode.setAttribute('data-editor-itemlabel', 'Form Container');
    targetNode.setAttribute('data-editor-itemmodel', 'form');
  }

  startObserving() {
    const config = { childList: true, subtree: true };
    this.observer.observe(this.targetNode, config);
  }

  stopObserving() {
    this.observer.disconnect();
  }

  generateItemId(id) {
    if (id) {
      return `urn:fnkconnection:${window.formPath}:default:Id:${id}`;
    }
    return `urn:fnkconnection:${window.formPath}:default`;
  }

  handleMutation(mutationsList) {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.classList.contains('field-wrapper')) {
            const { id } = addedNode;
            const fd = this.data.find((item) => item.Id === id);
            addedNode.setAttribute('itemtype', 'component');
            addedNode.setAttribute('itemid', this.generateItemId(fd.Id));
            addedNode.setAttribute('itemscope', '');
            addedNode.setAttribute('data-editor-itemlabel', fd.Label || fd.Name);
            addedNode.setAttribute('data-editor-itemmodel', fd.Type);
            const label = addedNode.querySelector('label');
            if (label) {
              label.setAttribute('itemprop', 'Label');
              label.setAttribute('itemtype', 'text');
            }
            const description = addedNode.querySelector('div.field-description');
            if (description) {
              description.setAttribute('aria-live', 'polite');
              description.setAttribute('itemtype', 'text');
              description.setAttribute('itemprop', 'Description');
            }
            const fieldset = addedNode.querySelector('fieldset');
            if (fieldset) {
              fieldset.setAttribute('itemtype', 'container');
              fieldset.setAttribute('data-editor-behavior', 'component');
            }
            console.log(addedNode);
          }
        });
      }
    });
  }
}
