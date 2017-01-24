import { React, expect, shallow } from '../../setup';
import ProgressUnit from '../../../lib/Progress/Unit';

describe('Progress/Unit', () => {
  let shallowWrapper = shallow(
    <ProgressUnit
      className='progress-unit--test'
      percent={20}
      color="red"
      name='Unit Name 1'
      filterLink="/filter-link-url"
    />
  );
});
