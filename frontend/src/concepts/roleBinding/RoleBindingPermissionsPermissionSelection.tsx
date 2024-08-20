import React from 'react';
import SimpleSelect from '~/components/SimpleSelect';
import { RoleBindingPermissionsRoleType } from './types';
import { castRoleBindingPermissionsRoleType, roleLabel } from './utils';

type RoleBindingPermissionsPermissionSelectionProps = {
  selection: RoleBindingPermissionsRoleType;
  permissionOptions: {
    type: RoleBindingPermissionsRoleType;
    description: string;
  }[];
  onSelect: (roleType: RoleBindingPermissionsRoleType) => void;
};

const RoleBindingPermissionsPermissionSelection: React.FC<
  RoleBindingPermissionsPermissionSelectionProps
> = ({ selection, onSelect, permissionOptions }) => (
  <SimpleSelect
    isFullWidth
    options={permissionOptions.map((option) => ({
      ...option,
      label: roleLabel(option.type),
      key: option.type,
    }))}
    value={selection}
    toggleLabel={roleLabel(selection)}
    onChange={(newSelection) => {
      onSelect(castRoleBindingPermissionsRoleType(newSelection));
    }}
    popperProps={{ direction: 'down' }}
  />
);

export default RoleBindingPermissionsPermissionSelection;
