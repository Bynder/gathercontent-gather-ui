import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PlanBox from '../../lib/PlanBox';
import PlanBoxPricing from '../../lib/PlanBox/Pricing';
import PlanBoxWrapper from '../../lib/PlanBox/Wrapper';
import PlanBoxAllowanceDetails from '../../lib/PlanBox/AllowanceDetails';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Pricing Plans', () => {
    return (
      <div>
        <StoryItem
          title="Pricing Plans"
          description="The plan boxes to display an entire plan type in the pricing section. It's made up of three different composable components: PlanBox, PlanBoxPricing and PlanBoxAllowanceDetails"
        >
          <PlanBoxWrapper>
            <PlanBox
              disabled={true}
              name="Plan name"
              description="Plan description"
              upgradeUrl="#upgrade"
              buttonText="Button text"
              tooltipText="Exceeded item limit"
            >
              <PlanBoxPricing
                price={100}
                priceIn="/mo"
                priceType="priceMonthly"
              />
              <PlanBoxAllowanceDetails
                plan={{ items: 100, projects: 10 }}
              />
            </PlanBox>
            <PlanBox
              disabled={false}
              name="Plan name"
              description="Plan description"
              upgradeUrl="#"
              buttonText="Button text"
              tooltipText="Exceeded item limit"
            >
              <PlanBoxPricing
                price={100}
                priceIn="/mo"
                priceType="priceMonthly"
              />
              <PlanBoxAllowanceDetails
                plan={{ items: 100, projects: 10 }}
              />
            </PlanBox>
            <PlanBox
              disabled={false}
              name="Plan name"
              description="Plan description"
              upgradeUrl="#upgrade"
              buttonText="Button text"
              tooltipText="Exceeded item limit"
            >
              <PlanBoxPricing
                price={100}
                priceIn="/mo"
                priceType="priceMonthly"
              />
              <PlanBoxAllowanceDetails
                plan={{ items: 100, projects: 10 }}
              />
            </PlanBox>
          </PlanBoxWrapper>
        </StoryItem>

        <StoryItem title="Pricing Plans (Collapsed Layout)">
          <PlanBoxWrapper
            className="plan-box__wrapper--recommend-collapse"
            gridClassName="grid--collapse"
            gridCellClassName="grid__cell--collapse"
          >
            <PlanBox
              disabled={true}
              name="Plan name"
              description="Plan description"
              upgradeUrl="#upgrade"
              buttonText="Button text"
              tooltipText="Exceeded item limit"
            >
              <PlanBoxPricing
                price={100}
                priceIn="/mo"
                priceType="priceMonthly"
              />
              <PlanBoxAllowanceDetails
                plan={{ items: 100, projects: 10 }}
              />
            </PlanBox>
            <PlanBox
              recommended={true}
              disabled={false}
              name="Plan name"
              description="Plan description"
              upgradeUrl="#"
              buttonText="Button text"
              tooltipText="Exceeded item limit"
            >
              <PlanBoxPricing
                price={100}
                originalPrice={150}
                savings={50}
                priceIn="/mo"
                priceType="priceMonthly"
              />
              <PlanBoxAllowanceDetails
                plan={{ items: 100, projects: 10 }}
              />
            </PlanBox>
            <PlanBox
              disabled={false}
              name="Plan name"
              description="Plan description"
              upgradeUrl="#upgrade"
              buttonText="Button text"
              tooltipText="Exceeded item limit"
            >
              <PlanBoxPricing
                price={100}
                priceIn="/mo"
                priceType="priceMonthly"
              />
              <PlanBoxAllowanceDetails
                plan={{ items: 100, projects: 10 }}
              />
            </PlanBox>
          </PlanBoxWrapper>
        </StoryItem>
      </div>
    );
  });
