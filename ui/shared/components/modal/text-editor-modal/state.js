import { createObjectsByIdReducer } from 'shared/utils/reducerUtils'

export const DEFAULT_TEXT_EDITOR_MODAL_ID = 'default'

// actions
const UPDATE_TEXT_EDITOR_MODAL = 'UPDATE_TEXT_EDITOR_MODAL'

// action creators
export const initRichTextEditorModal = (modalId = DEFAULT_TEXT_EDITOR_MODAL_ID) => ({
  type: UPDATE_TEXT_EDITOR_MODAL,
  updatesById: {
    [modalId]: {
      isVisible: false,
      title: '',
      initialText: '',
      formSubmitUrl: '/',
    },
  },
})


export const showRichTextEditorModal = (
  formSubmitUrl = '',
  title = '',
  initialText = '',
  modalId = DEFAULT_TEXT_EDITOR_MODAL_ID,
) => ({
  type: UPDATE_TEXT_EDITOR_MODAL,
  updatesById: {
    [modalId]: {
      isVisible: true,
      title,
      initialText,
      formSubmitUrl,
    },
  },
})


export const hideRichTextEditorModal = (modalId = DEFAULT_TEXT_EDITOR_MODAL_ID) => ({
  type: UPDATE_TEXT_EDITOR_MODAL,
  updatesById: {
    [modalId]: { isVisible: false },
  },
})

// selectors
export const getRichTextEditorModals = state => state.richTextEditorModals

export const richTextEditorModalState = {
  richTextEditorModals: createObjectsByIdReducer(UPDATE_TEXT_EDITOR_MODAL, {}, false),
}
