import React, { useRef } from "react";
import "./JournalEntry.css";
import { Link } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function JournalEntry() {

    const today = new Date().toLocaleDateString();

    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const defaultValues = {
        blog: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.blog && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="JournalEntry">

            <div className="je-rectangle">

                <div className="je-exit-button">
                    <Link to="/calendar">
                        <img src="/Assets/Icons/exit.svg" alt="exit button"/>
                    </Link>
                    {/* make a bit smaller */}
                </div>

                <p>{today}</p> 
                {/* make word date */}

                <p>How did you feel today?</p>
                <img src="/Assets/Icons/emoji_1.svg" alt="emoji 1"/>
                <img src="/Assets/Icons/emoji_2.svg" alt="emoji 2"/>
                <img src="/Assets/Icons/emoji_3.svg" alt="emoji 3"/>
                <img src="/Assets/Icons/emoji_4.svg" alt="emoji 4"/>
                <img src="/Assets/Icons/emoji_5.svg" alt="emoji 5"/>
                {/* make a bit smaller and clickable*/}
                <p>1 2 3 4 5</p>
                {/* add spacing */}

                <div className="je-centering-rectangle">
                    <div className="je-rectangle2">
                        <div className="je-rectangle3">
                            <p>Describe your day in one word: <input type="text" /></p>
                        </div>

                        <div className="card">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Toast ref={toast} />
                                <Controller
                                    name="blog"
                                    control={control}
                                    rules={{ required: 'Content is required.' }}
                                    render={({ field }) => <Editor id={field.name} name="blog" value={field.value} headerTemplate={header} onTextChange={(e) => field.onChange(e.textValue)} style={{ width: '900px', height: '320px' }} />}
                                />
                                <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                                    {getFormErrorMessage('blog')}
                                    <Link to="/calendar">
                                        <Button type="submit" label="Save Entry" className="je-save-button-style"/>
                                    </Link>
                                    {/* <Button type="submit" label="Save" /> */}
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>

        </div>
    );
  }
  
export default JournalEntry;