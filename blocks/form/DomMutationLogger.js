export default class DomMutationLogger {
    constructor(targetNode) {
      this.targetNode = targetNode;
      this.observer = new MutationObserver(this.handleMutation.bind(this));
    }
  
    startObserving() {
      const config = { childList: true, subtree: true };
      this.observer.observe(this.targetNode, config);
    }
  
    stopObserving() {
      this.observer.disconnect();
    }
  
    handleMutation(mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((addedNode) => {
            addedNode.setAttribute('data-added', "neeraj");
            console.log('Element added to DOM:', addedNode);
          });
        } else {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
      }
    }
  }