import React from 'react';
import { SearchEmptyState } from '../common';

export default (results, shouldShowEmptyState, emptyText, buttonText, buttonAction) => {
  if (shouldShowEmptyState) {
    return <SearchEmptyState
      text={emptyText}
      buttonText={buttonText}
      buttonAction={buttonAction} />;
  } else {
    return results;
  }
};
