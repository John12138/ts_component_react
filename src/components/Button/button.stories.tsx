import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonSize, ButtonType } from './button'
import { withInfo } from '@storybook/addon-info'; 

export default {
    title: 'Example/Button',
    component: Button,
    decorators: [   //用来控制样式显示的装饰器
        // (Story) => (
        //     <div style={{ textAlign: 'center' }}>
        //         <Story/>
        //     </div>
        // ),
        // withInfo
    ],
    argTypes: {
        btnType: {
            description: "按钮的类型",
            defaultValue: { summary: "primary" },
            control: {
                type: 'select',
                options: ['primary', 'default', 'danger', ]
            }
        },
        size: {
            description: "按钮的尺寸",
            defaultValue: { summary: "sm" },
            control: {
                type: 'radio',
                options: ['lg', 'sm']
            }
        },
    },
    parameters: {
        // info: {
        //     text: `this is a test`
        // }、
        backgrounds: {
            values: [
              { name: 'red', value: '#f00' },
              { name: 'green', value: '#0f0' },
              { name: 'blue', value: '#00f' },
            ],
          },
    }
    
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
//创建了组件，并关联属性

export const defalutButton = () => <Button onClick={()=>{console.log('x')}}>default button</Button>
defalutButton.storyName = 'this is a test'  //可更改UI界面中的名称

// export const sizeButton = () => {
//     return (
//         <>
//             <Button size={ButtonSize.Large}>Large button</Button>
//             <Button size={ButtonSize.Small}>Small button</Button>
//         </>
//     )
// }

// export const typeButton = () => {
//     return (
//         <>
//             <Button btnType={ButtonType.Danger}>Large button</Button>
//             <Button btnType={ButtonType.Defalut}>Small button</Button>
//             <Button btnType={ButtonType.Primary}>Small button</Button>
//             <Button btnType={ButtonType.Link} href="www.baidu.com">Small button</Button>
//         </>
//     )
// }


// export const Defalut = Template.bind({}, {  //这样加的参数不允许修改
//     btnType: ButtonType.Defalut,
//     size: ButtonSize.Small,
//     children: 'small button',
// }); 

// export const EditPropsButton = Template.bind({})
// EditPropsButton.args = {  //这样也是添加参数的方法，但是其添加的参数可以修改
//     btnType: ButtonType.Primary,
//     size: ButtonSize.Large,
//     children: 'Primary button',
// }

// export const LinkButton = Template.bind({})
// LinkButton.args = {  //这样也是添加参数的方法，但是其添加的参数可以修改
//     btnType: ButtonType.Link,
//     children: 'Link button',
//     href: 'www.baidu.com'
// }