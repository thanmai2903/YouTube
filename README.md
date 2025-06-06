...
Debouncing:

typing slow = 200ms
typing fast = 30ms
Performance:

debouncing with 200ms:

- if difference between two strokes is < 200ms - DECLINE API call
- > 200ms - make an API call
