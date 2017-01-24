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
