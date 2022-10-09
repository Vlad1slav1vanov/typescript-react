import React, {FC, useState, useRef } from 'react';

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);
    }

    const clickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler = (evt: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dragWithPreventHandler =(evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault();
        setDrag(true);
    }

    const leaveHandler =(evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault();
        setDrag(false);
    }

    const dropHandler =(evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault();
        setDrag(false);
        console.log('DROP')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый'/>
            <input ref={inputRef} type="text" placeholder='Не управляемый'/>
            <button onClick={clickHandler}>CLICK</button>
            <div draggable onDrag={dragHandler} style={{width: 200, height: 200, background: 'red'}}></div>
            <div onDrop={dropHandler} 
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHandler} 
            style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 20}}></div>
        </div>
    )
}

export default EventExample;