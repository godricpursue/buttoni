# buttoni

> &quot;patika.dev&quot; Button publishing project

[![NPM](https://img.shields.io/npm/v/buttoni.svg)](https://www.npmjs.com/package/buttoni) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save buttoni
```

## Usage

![buttons](./buttons.png)

```jsx
import React from 'react'

import { Button } from 'buttoni'
import 'buttoni/dist/index.css'

class Example extends Component {
  render() {
    return (
      <div>
        <Button>Default Button</Button>
        <Button type='primary'>Primary Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </div>
    )
  }
}
```

## License

MIT © [godricpursue](https://github.com/godricpursue)
