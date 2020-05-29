package com.example.ejercicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServiceImp implements PersonaService{
	@Autowired
	private PersonaRepositorio repositorio;
	@Override
	public List<Persona> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public Persona listarId(int id) {
		// TODO Auto-generated method stub
		return repositorio.findById(id);
	}

	@Override
	public Persona add(Persona p) {
		// TODO Auto-generated method stub
		return repositorio.save(p);
	}

	@Override
	public Persona edit(Persona p) {
		// TODO Auto-generated method stub
		return repositorio.save(p);
	}

	@Override
	public Persona delete(int id) {
		// TODO Auto-generated method stub
		Persona p = repositorio.findById(id);
		if(p!=null) {
			repositorio.delete(p);
		}
		return p;
	}
	
}
