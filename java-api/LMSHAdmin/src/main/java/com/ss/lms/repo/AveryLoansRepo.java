package com.ss.lms.repo;

import java.util.List;

import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ss.lms.entity.BookLoans;

@Repository
public interface AveryLoansRepo extends JpaRepository<BookLoans, Id>{
	@Query(" FROM BookLoans where bookId =:bookId and branchId =:branchId and cardNo =:cardNo")
	public List<BookLoans> readLoansById(@Param("bookId") Integer bookId, @Param("branchId") Integer branchId, @Param("cardNo") Integer CardNo);
	
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query(value = "UPDATE tbl_book_loans SET dueDate = date_add(current_timestamp(), interval 2 week) WHERE cardNo = :cardNo and bookId = :bookId and branchId = :branchId", nativeQuery = true)	
	public void overrideDueDate(@Param("cardNo") Integer cardNo, @Param("bookId") Integer bookId, @Param("branchId") Integer branchId);

}
