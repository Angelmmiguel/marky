// App prefix
const prefix = 'marky';

// Define the actions for the application
const actions = [
  'CONFIG_SET',
  'CONFIG_SAVE'
]

// Export them with a prefix to isolate our app in Redux
const actionFormatter = actions => {
  let formatted = {};

  actions.forEach(action => {
    formatted[action] = `${prefix}@${action}`;
  }, this);

  return formatted;
}

// Export formatted actions
const actionNames = actionFormatter(actions);
export default actionNames;
