# API Codes

::: tip
PrognoSports API will _always_ return an `200 OK` HTTP code.
:::

In case of error, the API will response with an error code and a brief description

## Auth error codes
All `60x` codes are referred to an authentification error

| Code | Message                          |
|------|----------------------------------|
| 600  | Invalid Credentials              |
| 601  | Unauthorized. Token not found    |
| 602  | Unauthorized. Invalid token      |
| 603  | Unauthorized. Orphan token       |
| 604  | Unauthorized. Token rejected     |
| 605  | Unauthorized. Invitation needed  |
| 606  | Unauthorized. Invalid invitation |
| 607  | Unauthorized. No permission for that |
| 608  | You must send the security token |
| 609  | You must send new the password   |
## Invalid request
All `7xx` codes are referred to an invalid request to the API

| Code | Message             |
|------|---------------------|
| 700  | Invalid request     |
| 701  | Invalid competition |
| 702  | Invalid season      |
| 703  | Invalid grand prix  |
| 704  | Invalid community   |
| 705  | Invalid circuit     |
| 706  | Invalid driver      |
| 707  | Invalid constructor |
| 708  | Invalid user        |

### Null parameter
All `71x` codes are referred to null parameters

| Code | Message                              |
|------|--------------------------------------|
| 710  | Email cannot be null                 |
| 711  | Username cannot be null              |
| 712  | Password cannot be null              |
| 713  | Community name cannot be null        |
| 714  | Community description cannot be null |

### Out of range
All `74x` codes are referred to invalid / out of range parameters

| Code | Message                                         |
|------|-------------------------------------------------|
| 740  | Invalid community privacy                       |
| 741  | Invalid amount of position predicted in qualify |
| 742  | Invalid amount of position predicted in race    |
| 743  | Invalid default community rule set              |

### Unique names in use
All `77x` codes are referred to names that should be uniques and are already in use

| Code | Message                        |
|------|--------------------------------|
| 770  | Email in use                   |
| 771  | Username in use                |
| 772  | Community in use               |
| 773  | Grand Prix name in use         |
| 774  | Circuit name in use            |
| 775  | Competition name in use        |
| 776  | Constructor / Team name in use |

## Server error
All `80x` codes are referred to server error

| Code | Message                        |
|------|--------------------------------|
| 800  | Server unexpected error        |
| 801  | Not a Number                   |
| 802  | Database error                 |
| 803  | Too many requests              |
| 804  | Endpoint not found             |