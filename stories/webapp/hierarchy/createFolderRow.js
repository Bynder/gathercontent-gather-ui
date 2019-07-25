import React from 'react';
import faker from 'faker';
import { FolderRow } from '../../../lib/FolderRow';

export const createFolderRow = () => (
  <FolderRow className="h-margin-bottom-half" open>
    {faker.commerce.department()}
  </FolderRow>
);
