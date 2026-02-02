# Testing Strategy

## Approach
The testing strategy focuses on validating both individual business logic and real user workflows.

Unit tests were written to verify:
- Correct task creation, deletion, and updates
- Input validation and error handling
- Filtering logic accuracy

Integration tests were written to simulate:
- End-to-end task lifecycle (create, complete, delete)
- Task filtering behavior across multiple states

## Rationale
Unit tests ensure correctness at the function level, while integration tests confirm system behavior across multiple operations. Test isolation is enforced using state resets before each test to ensure reliability and repeatability.

Jest was selected for its speed, simplicity, and built-in coverage reporting.