import React from 'react';

const settingContext = React.createContext();

const userProvider = settingContext.Provider;
const userConsumer = settingContext.Consumer;

export {userProvider , userConsumer}