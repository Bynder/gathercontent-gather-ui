import React, { Fragment } from "react";
import { storiesOf } from '@storybook/react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import StoryItem from '../styleguide/StoryItem';
import { PricingWrapper, PricingPlan, FeatureList, FeatureListItem, PricingToggle, SectionFeature, PricingToggleItem, Icon, TooltipWrapper } from "../../lib";
import PersonSVG from '../../assets/person.svg';

const features = [{
  name: 'Real-time content editor',
  standardEnabled: true,
  advancedEnabled: false,
}, {
  name: 'Structured templates',
  standardEnabled: true,
  advancedEnabled: true,
}, {
  name: 'Unlimited items',
  standardEnabled: true,
  advancedEnabled: true,
}, {
  name: 'Unlimited projects',
  standardEnabled: true,
  advancedEnabled: false,
}, {
  name: 'Advanced search',
  standardEnabled: true,
  advancedEnabled: false,
}];

const upgradeButton = (
  <a className="button button--primary" href="/">Upgrade</a>
);

const featureListHeadings = (
  <FeatureList title="Features" row>
    {features.map(({ name }) => (
      <FeatureListItem key={name}>
        <TooltipWrapper id={name} tooltipText="Tooltip text here..." placement="top">
          {name}
        </TooltipWrapper>
      </FeatureListItem>
    ))}
  </FeatureList>
);

const featureListStandard = (
  <FeatureList title="Features">
    {features.map(({ name, standardEnabled }) => (
      <FeatureListItem key={name}>
        {name}
        {(standardEnabled) ? <Icon name="tickCircle" className="fill-primary-green" /> : <Icon name="emptyCircle" />}
      </FeatureListItem>
    ))}
  </FeatureList>
);

const featureListAdvanced = (
  <FeatureList title="Features">
    {features.map(({ name, advancedEnabled }) => (
      <FeatureListItem key={name}>
        {name}
        {(advancedEnabled) ? <Icon name="tickCircle" className="fill-primary-green" /> : <Icon name="emptyCircle" />}
      </FeatureListItem>
    ))}
  </FeatureList>
);

storiesOf('Components', module)
  .add('Pricing Plans', () => {
    return (
      <div>
        <StoryItem
          title="Pricing"
          description="..."
        >
          <Fragment>
            <form action="">
              <SectionFeature>
                I would like to purchase <input className="form__input form-input__text" type="text" value="7" onChange={() => {}} /> seats for my account.
                <small>Seats can be added at any time. <a href="/">Find out more.</a></small>
              </SectionFeature>
            </form>

            <PricingWrapper smallPrint="Minimum of 7 seats for all plans">
              <PricingToggle>
                <PricingToggleItem
                  onClick={() => {}}
                  savings="Save 20%"
                  isActive
                >
                  Pay annually
                </PricingToggleItem>
                <PricingToggleItem onClick={() => {}}>Pay monthly</PricingToggleItem>
              </PricingToggle>

              {featureListHeadings}
              {featureListHeadings}
              {featureListHeadings}

              <Row>
                <Col xs={12} md={6}>
                  <PricingPlan price="$15" smallPrint="$750 per month" priceDesc="per seat per month" title="Standard" upgradeButton={upgradeButton} savings="Save $360">
                    {featureListStandard}
                    {featureListStandard}
                    {featureListStandard}
                  </PricingPlan>
                </Col>

                <Col xs={12} md={6}>
                  <PricingPlan price="$25" smallPrint="$1,250 per month" priceDesc="per seat per month" title="Advanced" upgradeButton={upgradeButton} savings="Save $360">
                    <div className="pricing__plan-person">
                      <PersonSVG />
                    </div>
                    {featureListAdvanced}
                    {featureListAdvanced}
                    {featureListAdvanced}
                  </PricingPlan>
                </Col>
              </Row>
            </PricingWrapper>
          </Fragment>
        </StoryItem>
      </div>
    );
  });
