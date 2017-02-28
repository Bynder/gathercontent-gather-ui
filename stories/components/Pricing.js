import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PlanBox from '../../lib/PlanBox';
import PlanBoxPricing from '../../lib/PlanBox/Pricing';
import PlanBoxAllowanceDetails from '../../lib/PlanBox/AllowanceDetails';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Pricing Plans', () => {
    return (
      <div>
        <StoryItem
          title="Pricing Plans"
          description="The plan boxes to display an entire plan type in the pricing section. It's made up of three different composable components: PlanBox, PlanBoxPricing and PlanBoxAllowanceDetails">
          <PlanBox
            recommended={true}
            disabled={true}
            name="Plan name"
            description="Plan description"
            upgradeUrl="#upgrade"
            buttonText="Button text"
            exceedsUsageMessage="Exceeded item limit"
          >
            <PlanBoxPricing
              price={100}
              priceIn="/mo"
              priceType="priceMonthly"
            />
            <PlanBoxAllowanceDetails
              plan={{ items: "100", projects: "10" }}
            />
          </PlanBox>
        </StoryItem>
      </div>
    );
  });
