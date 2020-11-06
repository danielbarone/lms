package com.ss.lms.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BookCopiesId implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6221333393616617397L;
	
	
	@Column(name = "bookId")
	private Integer bookId;
	
	@Column(name = "branchId")
	private Integer branchId;
	
	
	public BookCopiesId() {
		super();
	}
	public BookCopiesId (Integer bookId, Integer branchId) {
		super();
		this.bookId = bookId;
		this.branchId = branchId;
	}
	
	
	public Integer getBookId() {
		return bookId;
	}
	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public Integer getBranchId() {
		return branchId;
	}
	public void setBranchId(Integer branchId) {
		this.branchId = branchId;
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((bookId == null) ? 0 : bookId.hashCode());
		result = prime * result + ((branchId == null) ? 0 : branchId.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookCopiesId other = (BookCopiesId) obj;
		if (bookId == null) {
			if (other.bookId != null)
				return false;
		} else if (!bookId.equals(other.bookId))
			return false;
		if (branchId == null) {
			if (other.branchId != null)
				return false;
		} else if (!branchId.equals(other.branchId))
			return false;
		return true;
	}
	
	

}
