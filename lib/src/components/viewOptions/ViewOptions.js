import React, { useState } from 'react';
import { ButtonIcon, ButtonTertiary } from 'lib';
import { SearchInput } from '../../modules/searchInput/SearchInput';
import Dropdown from '../../../Dropdown';
import Icon from '../../../Icon';

export function ViewOptions({
  onChangeSearchHandler,
  onClearSearchHandler,
  searchValue,
  onViewChange,
  onSortChange,
  sortingValues,
  actions
}) {
  const [view, setView] = useState('grid');
  const [sort, setSort] = useState(sortingValues[0]);

  const onViewClick = value => {
    setView(value);
    onViewChange(value);
  };

  const onSortClick = ({ name, key }) => {
    setSort({ name, key });
    onSortChange(key);
  };

  return (
    <div className="view-options">
      <div>
        <SearchInput
          onChangeHandler={onChangeSearchHandler}
          onClearHandler={onClearSearchHandler}
          id="search-view-options"
          label="Search"
          placeholder="Search..."
          value={searchValue}
        />
      </div>
      <div className="view-options__sorting">
        <Dropdown>
          <Dropdown.Trigger>
            {({ toggleShowContent }) => (
              <ButtonTertiary
                onClick={toggleShowContent}
                size={ButtonTertiary.sizes.sm}
              >
                {sort.name}
                <Icon name="caret16" defaultActiveColor={false} />
              </ButtonTertiary>
            )}
          </Dropdown.Trigger>
          <Dropdown.Content className="p-0">
            {sortingValues.map(({ name, key }) => (
              <Dropdown.Action
                action={() => {
                  onSortClick({ name, key });
                }}
              >
                {name}
              </Dropdown.Action>
            ))}
          </Dropdown.Content>
        </Dropdown>
      </div>
      <div className="view-options__picker">
        <ButtonIcon
          size={ButtonIcon.sizes.sm}
          name="grid"
          onClick={() => onViewClick('grid')}
          active={view === 'grid'}
        />
        <ButtonIcon
          size={ButtonIcon.sizes.sm}
          name="list"
          onClick={() => onViewClick('list')}
          active={view === 'list'}
        />
      </div>
      {actions && <div className="view-options__actions">{actions()}</div>}
    </div>
  );
}
