package com.api.devnology.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

	/*Indica que a classe é uma entidade*/
@Entity

	/*Indica que essa entidade é uma tabela*/
@Table(name = "link")

public class LinkModel {
	
	@Id
						/*Estrategia da chave primaria*/
	@GeneratedValue(strategy = GenerationType.IDENTITY)
												/*Auto increment do SQL*/
	private long id;
	
	@NotNull
	private String nome;
	
	@NotNull
	private String link;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}
		
}
