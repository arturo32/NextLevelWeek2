import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherForm(){
	
	const history = useHistory();
	
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [bio, setBio] = useState('');

	const [subject, setSubject] = useState('select');
	const [cost, setCost] = useState('');

	const [scheduleItems, setScheduleItems] = useState([
		{week_day: 0, from: '', to: '' }
	]);

	function addNewScheduleItem(){
		setScheduleItems([ 
			...scheduleItems, 
			{ week_day: 0, from: '', to: '' }
		]);
	}

	function handleCreateClass(e: FormEvent){
		e.preventDefault();

		api.post('classes', {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost: Number(cost),
			schedule: scheduleItems
		}).then(() => {
			alert('Cadastro realizado com sucesso!');

			history.push('/');

		}).catch(() => {
			alert('Erro no cadastro!')
		});
	}

	function setScheduleItemValue(position: number, field: string, value: string){
		const updatedScheduleItems = scheduleItems.map( (scheduleItem, index) => {
			if(index === position){
				return {...scheduleItem, [field]: value}
			}

			return scheduleItem;
		});

		setScheduleItems(updatedScheduleItems);
		console.log(scheduleItems);
	}	




	return (
		<div id="page-teacher-form" className="container">
		
			<PageHeader 
				text="Que incrível que você quer dar aulas."
				description="O primeiro passo é preencher esse formulário de inscrição"
			></PageHeader>

			<main>
				<form onSubmit={handleCreateClass}>

					<fieldset>
						<legend>Seus dados</legend>
						<Input 
							label="Nome completo" 
							name="name" value={name} 
							onChange={(e)=> {setName(e.target.value)}} 
						></Input>
						<Input 
							label="Avatar" 
							name="avatar" 
							onChange={(e)=> setAvatar(e.target.value)}
						></Input>
						<Input 
							label="Whatsapp" 
							name="whatsapp" 
							onChange={(e)=> setWhatsapp(e.target.value)}
						></Input>
						<Textarea 
							label="Biografia" 
							name="bio"
							onChange={(e)=> setBio(e.target.value)}
						></Textarea>
					</fieldset>

					<fieldset>
						<legend>Sobre a aula</legend>
						<Select 
							label="Matéria" 
							name="subject"
							value={subject}
							onChange={(e)=> setSubject(e.target.value)}
							options={[
								{value: 'Artes', label: 'Artes'},
								{value: 'Biologia', label: 'Biologia'},
								{value: 'Ciências', label: 'Ciências'},
								{value: 'Educação Física', label: 'Educação Física'},
								{value: 'Física', label: 'Física'},
								{value: 'Geografia', label: 'Geografia'},
								{value: 'História', label: 'História'},
								{value: 'Português', label: 'Português'},
								{value: 'Matemática', label: 'Matemática'},
								{value: 'Química', label: 'Química'},
							]}
						></Select>
						<Input 
							label="Custo da sua hora por aula" 
							name="cost" 
							value={cost}
							onChange={(e)=> setCost(e.target.value)}
						></Input>
					</fieldset>

					<fieldset>
						<legend>
							{/*The legend tag does not support to be a flex container in Firefox*/}
							<div className="schedule-legend">
								Horários disponíveis
								<button type="button" onClick={addNewScheduleItem}>
									+ Novo horário
								</button>
							</div>
						</legend>
						{scheduleItems.map( (scheduleItem, index) => {
							return (
								<div key={index} className="schedule-item">
									<Select
										label="Dia da semana" 
										name="week-day"
										value={scheduleItem.week_day}
										onChange={e=> {setScheduleItemValue(index, 'week_day', e.target.value)}}
										options={[
											{value: '0', label: 'Domingo'},
											{value: '1', label: 'Segunda-feira'},
										    {value: '2', label: 'Terça-feira'},
											{value: '3', label: 'Quarta-feira'},
											{value: '4', label: 'Quinta-feira'},
											{value: '5', label: 'Sexta-feira'},
											{value: '6', label: 'Sábado'},
										]}
									></Select>
									<Input 
										name="from" 
										label="De" 
										type="time"
										value={scheduleItem.from}
										onChange={e=> {setScheduleItemValue(index, 'from', e.target.value)}}
									></Input>
									<Input 
										name="to" 
										label="Até" 
										type="time"
										value={scheduleItem.to}
										onChange={e=> {setScheduleItemValue(index, 'to', e.target.value)}}
									></Input>
								</div>
							)
						})}
						
					</fieldset>
					<footer>
						<p>
							<img src={warningIcon} alt="Aviso importante"/>
							Importante! <br/>
							Preencha todos os dados
						</p>
						<button type="submit" >
							Salvar cadastro
						</button>
					</footer>
				</form>
				
			</main>
		</div>
	)
}

export default TeacherForm;