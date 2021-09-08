import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector  } from 'react-redux';
import { useHistory } from 'react-router';


export const DoctorEdit = ({ match }) => {
	const { doctor } = useSelector((state) => ({ ...state }));
	const { params } = match;
	const history = useHistory()
   const found = doctor.find((d) => {
		return d.id == params.id;
	});
	const [editedDetail, setEditedDetail] = useState(found.name);
   const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault();
      dispatch({
         type: 'EDIT_DOCTOR',
         payload: {
            id: params.id,
            name: editedDetail
         }
      })
		history.push('/admin')


	};
	return (
		<>
			<Form
				name='basic'
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				initialValues={{
					remember: true,
				}}
				style={{
					position: 'absolute',
					top: '30%',
					left: '50%',
					transform: 'translateX(-50%)',
				}}
			>
				<Form.Item
					label='name'
					name='name'
					initialvalues={
						{editedDetail}
					}
					rules={[
						{
							required: true,
							message: 'Please provide a input!',
						},
					]}
				>
					<Input defaultValue={editedDetail}
						onChange={(e) => setEditedDetail(e.target.value)}
               />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type='primary' htmlType='submit' onClick={handleSubmit}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default DoctorEdit;
