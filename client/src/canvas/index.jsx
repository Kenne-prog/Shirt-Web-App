import React from 'react'
import {Canvas} from '@react-three/fiber';
import {Environment, Center} from '@react-three/drei';
import Item from './Item';
import Backdrop from './Backgrop'
import CameraRig from './CameraRig'

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            camera={{position:[0,0,0], fov: 25}}
            gl = {{preserveDrawingBuffer: true}}
            className="w-full max-w-full h-full transition-all ease-in"
        >
            <ambientLight intensity={0.5}/>
            <Environment preset="city"/>
            <CameraRig>
                <Backdrop/>
                <Center>
                    <Item />
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default CanvasModel
