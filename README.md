# neat-cli-print
Neat print for CLI

## Usage

```javascript
import {createPrinter} from 'neat-cli-print';

const print = createPrinter('love');

print.info('Love', 'Peace');
print.error('War');
print.success('Happy', 'Life');
print.warn('Sick');
```