package com.uniclo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Gudang")
public class Uniclo{
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name = "Name")
	private String name;
	
	@Column(name = "Type")
	private String type;
	
	@Column(name = "Description")
	private String desc;
	
	@Column(name = "Price")
	private int price;
	
	@Column(name = "Image_URL")
	private String imgUrl;
}
