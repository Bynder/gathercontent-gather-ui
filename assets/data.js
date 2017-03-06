export function getDropdownItems() {
  return [{
    name: 'Restore Items',
    action() {
      console.log('restore items');
    }
  }, {
    name: 'Delete Items',
    action() {
      console.log('delete items');
    }
  }];
}

export function getDropdownItemsWithSeparator() {
  return [{
    name: 'Restore Items',
    action() {
      console.log('restore items');
    }
  }, {
    type: 'separator',
  }, {
    name: 'Delete Items',
    action() {
      console.log('delete items');
    }
  }];
}
