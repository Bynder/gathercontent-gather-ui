import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { CollectionsTable, Checkbox } from 'lib';

const IndividualUserProjects = ({ projects }) => (
  <CollectionsTable>
    <CollectionsTable.Row>
      <CollectionsTable.Heading>Name</CollectionsTable.Heading>
      <CollectionsTable.Heading className="hide-small">
        Items
      </CollectionsTable.Heading>
      <CollectionsTable.Heading className="hide-small">
        Project type
      </CollectionsTable.Heading>
    </CollectionsTable.Row>
    {projects.map(project => (
      <CollectionsTable.Row key={project.id}>
        <CollectionsTable.Cell>
          <Checkbox
            name={project.name}
            id={`select-${project.id}`}
            onChangeHandler={() => {}}
            checked={project.canAccess}
            label={project.name}
          />
        </CollectionsTable.Cell>
        <CollectionsTable.Cell allowOverflow>
          {project.itemCount} items
        </CollectionsTable.Cell>
        <CollectionsTable.Cell>{project.projectType}</CollectionsTable.Cell>
      </CollectionsTable.Row>
    ))}
  </CollectionsTable>
);

IndividualUserProjects.propTypes = {
  projects: arrayOf(shape()).isRequired
};

export default IndividualUserProjects;
