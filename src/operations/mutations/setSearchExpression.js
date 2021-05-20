import { searchExpressionVar } from '../../apolloCache';

const setSearchExpression = (expression) => {
  searchExpressionVar(expression);
};

export default setSearchExpression;
