import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table from '../../lib/HTMLTable/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('HTMLTable', () => {
    return (
      <div>
        <StoryItem
        title="Table heading"
        description="A component that renders a table heading.">
          <Table>
            <thead>
              <tr>
                <th className="table__header">
                  Need a bigger plan?<br /><a href="http://help.gathercontent.com/" className="pricing-table__contact">Get in touch</a>
                </th>
                <th className="table__header">
                  <p>Studio</p>
                </th>
                <th className="table__header">
                  <p>Plus</p>
                </th>
                <th className="table__header">
                  <p>Pro</p>
                </th>
                <th className="table__header">
                  <p>Company</p>
                </th>
                <th className="table__header">
                  <p>Publisher</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table__cell">
                  <span>Items</span>
                </td>
                <td className="table__cell">
                  <span>500</span>
                </td>
                <td className="table__cell">
                  <span>1000</span>
                </td>
                <td className="table__cell">
                  <span>2000</span>
                </td>
                <td className="table__cell">
                  <span>3000</span>
                </td>
                <td className="table__cell">
                  <span>5000</span>
                </td>
              </tr>
              <tr>
                <td className="table__cell">
                  <span>Active projects</span>
                </td>
                <td className="table__cell">
                  <span>10</span>
                </td>
                <td className="table__cell">
                  <span>25</span>
                </td>
                <td className="table__cell">
                  <span>50</span>
                </td>
                <td className="table__cell">
                  <span>75</span>
                </td>
                <td className="table__cell">
                  <span>125</span>
                </td>
              </tr>
              <tr>
                <td className="table__cell">
                  <span>Unlimited users</span>
                </td>
                <td className="table__cell">
                  <span>Unlimited users</span>
                </td>
                <td className="table__cell">
                  <span>Unlimited users</span>
                </td>
                <td className="table__cell">
                  <span>Unlimited users</span>
                </td>
                <td className="table__cell">
                  <span>Unlimited users</span>
                </td>
                <td className="table__cell">
                  <span>Unlimited users</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </StoryItem>
      </div>
    );
  });
