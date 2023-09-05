import React, { useState } from "react";
import { DropdownContent, Input, Label, Person } from "lib";
import Dropdown from "../../../Dropdown";

export function PersonSearch({
  people,
  onPersonSelect,
  label,
  placeholder,
}: any) {
  const [searchValue, setSearchValue] = useState("");

  const filteredPeople = searchValue
    ? people.filter(
        (p: any) =>
          p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          p.email.toLowerCase().includes(searchValue.toLowerCase())
      )
    : people;

  return (
    <Dropdown id="person-search-story" className="overflow-visible w-full">
      {({ showContent }: any) => (
        <>
          <Dropdown.Trigger triggerClassName="w-full">
            {({ toggleShowContent }: any) => (
              <>
                <Label htmlFor="person-search">{label}</Label>
                <Input
                  id="person-search"
                  placeholder={placeholder}
                  onFocus={() => toggleShowContent(true)}
                  onBlur={() => (showContent ? null : toggleShowContent(true))}
                  onChange={(e: any) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
              </>
            )}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content
              noTransform
              collapse
              className="w-full max-h-56 overflow-y-auto"
            >
              <DropdownContent>
                {searchValue && !filteredPeople.length ? (
                  <DropdownContent.Body>
                    <span className="block p-4 text-neutral-primary">
                      Nobody matches your search
                      <p>
                        <a
                          className=" leading-snug text-blue-primary"
                          href="/people"
                        >
                          Manage your team →
                        </a>
                      </p>
                    </span>
                  </DropdownContent.Body>
                ) : (
                  <DropdownContent.Body>
                    {filteredPeople.map((person: any) => (
                      <Person
                        name={person.name}
                        subtitle={person.email}
                        avatarUrl={person.avatar}
                        initials={person.initials}
                        className="items-center px-4"
                        interactive
                        onClick={() => onPersonSelect(person.id)}
                        highlightText={searchValue}
                        colour={person.colour}
                        key={person.email}
                      />
                    ))}
                  </DropdownContent.Body>
                )}
              </DropdownContent>
            </Dropdown.Content>
          )}
        </>
      )}
    </Dropdown>
  );
}
