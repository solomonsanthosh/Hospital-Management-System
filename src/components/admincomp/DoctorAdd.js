import React, { useState, useEffect } from 'react';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import {
	Form,
	Input,
	InputNumber,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
} from 'antd';
import '../../css/staff.css';
import '../../css/admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Listitem from '../Listitem';

const DoctorAdd = () => {
	const [email, setEmail] = useState('');
	const [newDoctor, setNewDoctor] = useState('');
	const [phone, setPhone] = useState();
	const [gender, setGender] = useState(['Male','Female','Other']);
	const { Option } = Select;
	const { doctor } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const [doctors, setDoctors] = useState([]);

	useEffect(async () => {
		await setDoctors(doctor);
		console.log(doctors);
	}, [doctor]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_DOCTOR',
			payload: {
				id: doctor.length + 1,
				name: newDoctor,
			},
		});
	};
	return (
		<div className='doctorAdd'>
			<div className='doc-form'>
				{/* <h1 className='titleAdd'>ADD DOCTOR</h1>
			<Input
				size='large'
				placeholder='Add Doctor'
				prefix={<UserAddOutlined />}
				className='addPatient'
				suffix={
					<PlusOutlined
						style={{ backgroundColor: '' }}
						onClick={handleSubmit}
					/>
				}
				value={newDoctor}
				onChange={(e) => setNewDoctor(e.target.value)}
			/>
			{doctors.map((doc) => (
				<>
					<Listitem person={doc}></Listitem>
				</>
			))} */}
				{/* <Form
					// {...formItemLayout}
					// form={form}
					name='register'
					// onFinish={onFinish}
					initialValues={{
						residence: ['zhejiang', 'hangzhou', 'xihu'],
						prefix: '86',
					}}
					scrollToFirstError
				>
					<Form.Item
						name='email'
						label='E-mail'
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}
					>
						<Input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								console.log(email);
							}}
						/>
					</Form.Item>

					<Form.Item
						name='Name'
						label='Name'
						rules={[
							{
								required: true,
								message: 'Please input name!',
								whitespace: true,
							},
						]}
					>
						<Input
							value={newDoctor}
							onChange={(e) => setNewDoctor(e.target.value)}
						/>
					</Form.Item>

					<Form.Item
						name='phone'
						label='Phone Number'
						rules={[
							{
								required: true,
								message: 'Please input your phone number!',
							},
						]}
					>
						<Input
							// addonBefore={prefixSelector}
							style={{
								width: '100%',
							}}
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</Form.Item>

					<Form.Item
						name='gender'
						label='Gender'
						rules={[
							{
								required: true,
								message: 'Please select gender!',
							},
						]}
					>
						<Select
							placeholder='select your gender'
							value={gender}
							onChange={(event) => {
								// setGender(event.target.value);
								console.log(value);
							}}
						>
                     {gender.map((g)=> {
                        <Option key={g} value={g}>{g}</Option>

                     })}
						
						</Select>
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Register
						</Button>
					</Form.Item>
				</Form> */}
            <div className='container-fluid'>
			<div className='row'>
				<div className='col-md-2'>
					<AdminNav />
				</div>
				<div className='col-md-5 offset-md-2'>
					<h4 className='mb-4'>
						Product create
						{loading ? (
							<LoadingOutlined className='text-yellow-500 icon' />
						) : null}
					</h4>

					<hr />

					<div className='p-3'>
						<FileUpload
							values={values}
							setValues={setValues}
							setLoading={setLoading}
						/>
					</div>

					<ProductCreateForm
						values={values}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						handleCategoryChange={handleCategoryChange}
						showSubs={showSubs}
						subOptions={subOptions}
						setValues={setValues}
					/>
				</div>
			</div>
		</div>
	);
			</div>
		</div>
	);
};

export default DoctorAdd;
