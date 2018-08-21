import React from 'react'
import { render } from 'react-dom'

import Form from 'react-jsonschema-form'

import './dnd.less'

const schema = {
  "title": "Select Products and Modifiers in the following text.",
  type: "object",
  properties: {
    foo: {
      type: "object",
      properties: {
        bar: {type: "string"}
      }
    },
    baz: {
      type: "array",
      items: {
        type: "object",
        properties: {
          description: {
            "type": "string"
          }
        }
      }
    }
  }
}

const uiSchema = {
   foo: {
    bar: {
      "ui:widget": "textarea"
    },
  },
  baz: {
    // note the "items" for an array
    items: {
      description: {
        "ui:widget": "textarea"
      }
    }
  }
}

class MyForm extends React.Component {
  onSubmit(e) {
    console.log('onSubmit', e)
  }
  render() {
    const { formData } = this.props
    return (
      <div className='container'>
        <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
  			<Form schema={schema}
        		uiSchema={uiSchema} />
            </div>
        </div>
      </div>
    )
  }
}

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h3>MTurk Mock Form</h3>
        <MyForm formData={{ firstName: 'hello' }} />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
