/* eslint-disable no-unused-expressions */

import 'react-hot-loader/patch'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { injectGlobal } from 'styled-components'

import InitialSettingsProvider from 'shared/components/setup/InitialSettingsProvider'
import ReduxInit from 'shared/components/setup/ReduxInit'
import ErrorBoundary from 'shared/components/ErrorBoundary'
import 'shared/global.css'

import VariantSearchUI from './components/VariantSearchUI'
import rootReducer, { getStateToSave, applyRestoredState } from './reducers/rootReducer'


injectGlobal`
  .ui.form .field {
    margin: 0;
  }
  
  .ui.form select {
    padding: 0;
  }
  
  .field {
    display: inline;
  }
`

// render top-level component
ReactDOM.render(
  <AppContainer>
    <ErrorBoundary>
      <InitialSettingsProvider>
        <ReduxInit storeName="variantsearch" rootReducer={rootReducer} getStateToSave={getStateToSave} applyRestoredState={applyRestoredState}>
          <VariantSearchUI />
        </ReduxInit>
      </InitialSettingsProvider>
    </ErrorBoundary>
  </AppContainer>,
  document.getElementById('reactjs-root'),
)
