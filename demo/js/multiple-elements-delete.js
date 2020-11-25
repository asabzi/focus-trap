const { createFocusTrap } = require('../../dist/focus-trap');

const container = document.getElementById('multipleelements-delete');
const selectors = ['#multipleelements-delete-1', '#multipleelements-delete-2'];

const focusTrap = createFocusTrap(selectors, {
  allowOutsideClick(event) {
    return event.target.id === 'deactivate-multipleelements-delete';
  },
  onActivate: function () {
    container.className = 'trap is-active';
    selectors.forEach(
      (selector) =>
        (document.querySelector(selector).className = 'is-active-nested')
    );
  },
  onDeactivate: function () {
    container.className = 'trap';
    selectors.forEach(
      (selector) => (document.querySelector(selector).className = null)
    );
  },
});

document
  .getElementById('activate-multipleelements-delete')
  .addEventListener('click', function () {
    focusTrap.activate();
  });

document
  .getElementById('deactivate-multipleelements-delete')
  .addEventListener('click', function () {
    focusTrap.deactivate();
  });

document
  .getElementById('multipleelements-delete-remove')
  .addEventListener('click', function () {
    document.getElementById('multipleelements-delete-removed-node').remove();
  });
