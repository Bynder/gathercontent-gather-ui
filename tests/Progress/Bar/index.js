import { React, expect, shallow } from '../../setup';
import ProgressBar from '../../../lib/Progress/Bar';

describe('Progress/Bar', () => {
  let shallowWrapper = shallow(
    <ProgressBar className='progress-bar--test'>
      <div>Child</div>
      <div>Child</div>
    </ProgressBar>
  );
});
