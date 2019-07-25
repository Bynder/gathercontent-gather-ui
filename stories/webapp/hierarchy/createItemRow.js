import React from 'react';
import faker from 'faker';
import { ItemRow } from '../../../lib';

export const createItemRow = () => (
  <ItemRow className="h-margin-bottom-half" bordered>
    {faker.commerce.productName()}
  </ItemRow>
);
