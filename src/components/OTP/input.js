/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useRef, useLayoutEffect } from "react";

import { usePrevious } from "../../hooks/usePrevious";

const OtpInput = ({ name, onChange, className, required, value,
    maxLength, pattern, readOnly, focus, autoFocus, ...props }) => {

    const inputRef = useRef(null);
    const prevFocus = usePrevious(!!focus);

    useLayoutEffect(() => {
        if (inputRef.current) {
            if (focus && autoFocus) {
                inputRef.current.focus();
            }
            if (focus && autoFocus && focus !== prevFocus) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }
    }, [autoFocus, focus, prevFocus]);

    return <input
        ref={inputRef}
        {...props}
        type="text"
        name={name}
        onChange={(e) => {
            if (onChange) { //props.onChange
                onChange(e);
            }
        }}
        className="form-control"
        required={required}
        maxLength={maxLength}
        pattern={pattern}
        readOnly={readOnly}
        value={value}
    />
}

const SingleOTPInput = memo(OtpInput);


export default SingleOTPInput;
