/* eslint-disable no-multi-spaces */
import {
  CASE_REVIEW_STATUS_ACCEPTED_FOR_STORE_DNA,
  CASE_REVIEW_STATUS_ACCEPTED_FOR_ARRAY,
  CASE_REVIEW_STATUS_ACCEPTED_FOR_EXOME,
  CASE_REVIEW_STATUS_ACCEPTED_FOR_GENOME,
  CASE_REVIEW_STATUS_ACCEPTED_FOR_RNASEQ,
  CASE_REVIEW_STATUS_ACCEPTED_FOR_REPROCESSING,
} from '../../shared/constants/caseReviewConstants'

export const SHOW_ALL = 'ALL'
export const SHOW_ACCEPTED = 'ACCEPTED'
export const SHOW_NOT_ACCEPTED = 'NOT_ACCEPTED'
export const SHOW_IN_REVIEW = 'IN_REVIEW'
export const SHOW_UNCERTAIN = 'UNCERTAIN'
export const SHOW_MORE_INFO_NEEDED = 'MORE_INFO_NEEDED'
export const SHOW_NOT_IN_REVIEW = 'NOT_IN_REVIEW'
export const SHOW_PENDING_RESULTS_AND_RECORDS = 'PENDING_RESULTS_AND_RECORDS'
export const SHOW_WAITLIST = 'WAITLIST'

export const SORT_BY_FAMILY_NAME = 'FAMILY_NAME'
export const SORT_BY_DATE_ADDED = 'DATE_ADDED'
export const SORT_BY_DATE_LAST_CHANGED = 'DATE_LAST_CHANGED'

export const CASE_REVIEW_STATUS_ACCEPTED_FOR_OPTIONS = [
  { value: CASE_REVIEW_STATUS_ACCEPTED_FOR_STORE_DNA,   name: 'Store DNA' },
  { value: CASE_REVIEW_STATUS_ACCEPTED_FOR_ARRAY,       name: 'Array' },
  '---', /* adds line break */
  { value: CASE_REVIEW_STATUS_ACCEPTED_FOR_EXOME,       name: 'WES' },
  { value: CASE_REVIEW_STATUS_ACCEPTED_FOR_GENOME,      name: 'WGS' },
  { value: CASE_REVIEW_STATUS_ACCEPTED_FOR_RNASEQ,      name: 'RNA' },
  '---',
  { value: CASE_REVIEW_STATUS_ACCEPTED_FOR_REPROCESSING,      name: 'Reprocess' },
]
