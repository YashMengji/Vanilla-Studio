import React from 'react'
import BasicProperties from './BasicProperties'
import LayoutProperties from './LayoutProperties'
import AnimationProperties from './AnimationProperties'

function EditPropertiesPanel() {
  return (
    <div className="div-edit-properties-panel">
      <BasicProperties/>
      <LayoutProperties/>
      <AnimationProperties/>
    </div>
  )
}

export default EditPropertiesPanel