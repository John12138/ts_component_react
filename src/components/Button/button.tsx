import React from 'react'
import classNames from 'classnames' 

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Defalut = 'default', 
    Danger = 'danger',
    Link = 'link'
}

//Button组件的参数接口
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;          //值的类型可以是自定义的枚举
    btnType?: ButtonType;       //Type本身是button上的属性，所以要叫btnType
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>  //联合类型，所有Button上的属性
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>  //联合类型，所有a标签上的属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>            //将这两个上的属性都设置为可选的 
//Button组件的定义
const Button: React.FC<ButtonProps> = props => {
    const { 
        btnType, 
        disabled,
        size,
        children,
        href,
        className,
        ...restProps
    } = props
    //btn, btn-lg, btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled   //只针对Link类的Button
    })
    if(btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
                >
                { children }
            </a>
        )
    } else {
        return (
            <button
                {...restProps}
                className={classes}
                disabled={disabled}
                >
                { children }
            </button>
        )
    }
}

//默认值
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Defalut
}

export default Button