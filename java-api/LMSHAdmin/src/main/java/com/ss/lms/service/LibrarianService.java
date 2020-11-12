package com.ss.lms.service;



import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.ss.lms.entity.BookCopies;
import com.ss.lms.entity.BookLoans;
import com.ss.lms.entity.Borrower;
import com.ss.lms.entity.Publisher;
import com.ss.lms.repo.BookCopiesRepo;
import com.ss.lms.repo.BookLoansRepo;
import com.ss.lms.repo.BookRepo;
import com.ss.lms.repo.BranchRepo;
import com.ss.lms.entity.Book;
import com.ss.lms.entity.Branch;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class LibrarianService {
	
	@Autowired
	public BranchRepo brrepo;	
	
	@Autowired
	public BookRepo brepo;	
	
	@Autowired
	public BookCopiesRepo bcrepo;	
	
	@Autowired
	public BookLoansRepo blrepo;	
	
//	@Transactional

	
	@RequestMapping(value = "/getBranchesByQuery", method = RequestMethod.GET, produces = "application/json")
	public List<Branch> getBranchesByQuery(@RequestParam String searchString) {
		List<Branch> branches = new ArrayList<>();
		if (searchString != null && searchString.length() > 0) {
				branches = brrepo.readBranchesByName(searchString);
		} else {
				branches = brrepo.findAll();
		}
		return branches;
	}
	
	///make sure to hide branchId in borrower version
	@RequestMapping(value = "/getAllBranches", method = RequestMethod.GET, produces = "application/json")
	public List<Branch> getAllBranches() {
		List<Branch> branchs = new ArrayList<>();
		branchs = brrepo.findAll();
		return branchs;
	}
	
	
	@RequestMapping(value = "/getAllBookCopies", method = RequestMethod.GET, produces = "application/json")
	public List<BookCopies> getAllBookCopies() {
		List<BookCopies> bookCopies = new ArrayList<>();
		bookCopies = bcrepo.findAll();
		return bookCopies;
	}
	
	
	@RequestMapping(value = "/getAllBookLoans", method = RequestMethod.GET, produces = "application/json")
	public List<BookLoans> getAllBookLoans() {
		List<BookLoans> bookLoans = new ArrayList<>();
		bookLoans = blrepo.findAll();
		return bookLoans;
	}
	
	@RequestMapping(value = "/getBranchBooks", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public List<Book> getBranchBooks(@RequestBody Branch sBranch) throws SQLException { 
		List<Book> books = new ArrayList<>();
		if(sBranch.getBranchId()==null)
			return null;
		int branchId = sBranch.getBranchId();
		List<BookCopies> bc = new ArrayList<>();
		bc = bcrepo.readBookCopiesByBranchId(branchId);
		
		for (BookCopies a : bc) {
			books.add(getBookById(a.getId().getBookId()));
		}		
		return books;
	}
	
	
	@RequestMapping(value = "/getBookCopiesByBranchId", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public List<BookCopies> getBookCopiesByBranchId(@RequestBody Branch sBranch) throws SQLException { 
		if(sBranch.getBranchId()==null)
			return null;
		int branchId = sBranch.getBranchId();
		List<BookCopies> bc = new ArrayList<>();
		bc = bcrepo.readBookCopiesByBranchId(branchId);	
		return bc;
	}
	
	@RequestMapping(value = "/getBookCopyNo", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public BookCopies getBookCopyNo(@RequestBody BookCopies bookCopies) throws SQLException { 
		if(bookCopies.getId().getBranchId()==null)
			return null;
		int branchId = bookCopies.getId().getBranchId();
		if(bookCopies.getId().getBookId()==null)
			return null;
		int bookId = bookCopies.getId().getBranchId();
		BookCopies bc = getBookCopiesById(bookId, branchId);	
		return bc;
	}
	
	
	@RequestMapping(value = "/addBookCopies", method = RequestMethod.POST, produces = "application/json")
	public List<BookCopies> addBookCopies(@RequestBody BookCopies bookCopies ) throws SQLException { 
	
	//	if(bookCopies.getBranchId() == null)
	//		return null;
		int branchId = bookCopies.getId().getBranchId();
		bcrepo.save(bookCopies);
		List<BookCopies> bc = new ArrayList<>();
		bc = bcrepo.readBookCopiesByBranchId(branchId);	
		return bc;
	}
	
	
	@RequestMapping(value = "/updateBookCopies", method = RequestMethod.POST, produces = "application/json")
	public List<BookCopies> updateBookCopies(@RequestBody BookCopies bookCopies ) throws SQLException { 
	
		int branchId = bookCopies.getId().getBranchId();
		bcrepo.save(bookCopies);
		List<BookCopies> bc = new ArrayList<>();
		bc = bcrepo.readBookCopiesByBranchId(branchId);	
		return bc;
	}
	
	///Shorter version of body u need to send. Just CardNo, not wrapped in id
	@RequestMapping(value = "/getBookLoansByCardNo", method = RequestMethod.GET, produces = "application/json")
	public List<BookLoans> getBookLoansByCardNo(@RequestBody Borrower borrower) throws SQLException { 
		if(borrower.getCardNo()==null)
			return null;
		int cardNo = borrower.getCardNo();
		List<BookLoans> bl = new ArrayList<>();
		bl = blrepo.readBookLoansByCardNo(cardNo);	
		return bl;
	}
	
	///// cardNo needs to be wrapped in id
	@RequestMapping(value = "/getBookLoansByCardNo2", method = RequestMethod.GET, produces = "application/json")
	public List<BookLoans> getBookLoansByCardNo2(@RequestBody BookLoans loan) throws SQLException { 
		if(loan.getId().getCardNo()==null)
			return null;
		int cardNo = loan.getId().getCardNo();
		List<BookLoans> bl = new ArrayList<>();
		bl = blrepo.readBookLoansByCardNo(cardNo);	
		return bl;
	}
	
	@RequestMapping(value = "/getBookLoansByBranchId", method = RequestMethod.GET, produces = "application/json")
	public List<BookLoans> getBookLoansByBranchId(@RequestBody BookLoans loan) throws SQLException { 
		List<Book> books = new ArrayList<>();
		if(loan.getId().getBranchId()==null)
			return null;
		int branchId = loan.getId().getBranchId();
		List<BookLoans> bl = new ArrayList<>();
		bl = blrepo.readBookLoansByBranchId(branchId);	
		return bl;
	}
	
	
	
	
	public Branch getBranchById(int branchId) throws SQLException{
		List<Branch> branchs = brrepo.readBranchesById(branchId);
		if(!branchs.isEmpty())
			return branchs.get(0);
		return null;
		
	}

	@CrossOrigin
	@RequestMapping(value = "/deleteBranchRE", method = RequestMethod.DELETE, consumes = "application/json")
	public ResponseEntity<?> deleteBranchRE(@RequestBody Branch branch) {
		try {
			brrepo.delete(branch);
			return new ResponseEntity<>(branch, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>("Failed to delete branch.", HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value = "/updateBranchRE", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public ResponseEntity<?> updateBranchRE(@RequestBody Branch branch) {
		try {
			if (brrepo.existsById(branch.getBranchId())) {
				Branch updatedBranch = brrepo.getOne(branch.getBranchId());
				if (branch.getBranchName() != null) {
					updatedBranch.setBranchName(branch.getBranchName());
				}
	
				if (branch.getBranchAddress() != null) {
					updatedBranch.setBranchAddress(branch.getBranchAddress());
				}
				brrepo.save(updatedBranch);
				return new ResponseEntity<>(branch, HttpStatus.OK);
			}
			return new ResponseEntity<>("Could not locate branch.", HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>("Failed to update branch", HttpStatus.BAD_REQUEST);
		}
	}
	
	@Transactional
	@RequestMapping(value = "/updateBranch", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public List<Branch> updateBranch(@RequestBody Branch branch) throws SQLException { 
		
		if(branch.getBranchId() == null)
			return(getAllBranches());
		
		
		Branch oldBranch = getBranchById(branch.getBranchId());
		
		if(branch.getBranchName()!= null) {
			oldBranch.setBranchName(branch.getBranchName());
		}
		
		if(branch.getBranchAddress()!= null) {
			oldBranch.setBranchAddress(branch.getBranchAddress());
		}
		
		if(branch.getBooks()!= null) {
			List<Book> books = new ArrayList<>();
			for (Book a : branch.getBooks()) {
				books.add(getBookById(a.getBookId()));
			}
			oldBranch.setBooks(books);
		}
		
				brrepo.save(oldBranch);
				 return(getAllBranches());
		
	}
	
	
	@Transactional
	@RequestMapping(value = "/deleteBranch", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public List<Branch> deleteBranch(@RequestBody Branch branch) throws SQLException { 
		
				brrepo.delete(branch);
				 return(getAllBranches());
		
	}
	
	
	@Transactional
	@RequestMapping(value = "/deleteBranchById", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public List<Branch> deleteBranchById(@RequestBody Branch branch) throws SQLException { 
		
				if(branch.getBranchId()== null)
					return getAllBranches();
				
				Branch p = getBranchById(branch.getBranchId());
				brrepo.delete(p);
				 return(getAllBranches());
		
	}
	
	
	
	public Book getBookById(int bookId) throws SQLException{
		List<Book> books = brepo.readBooksById(bookId);
		if(!books.isEmpty())
			return books.get(0);
		return null;
		
	}
	
	
	public BookCopies getBookCopiesById(int bookId, int branchId) throws SQLException{
		List<BookCopies> bookCopies = bcrepo.readBookCopiesById(bookId, branchId);
		if(!bookCopies.isEmpty())
			return bookCopies.get(0);
		return null;
		
	}
	
	
	public BookLoans getBookLoansById(int bookId, int branchId, int cardNo) throws SQLException{
		List<BookLoans> bookLoans = blrepo.readBookLoansById(bookId, branchId, cardNo);
		if(!bookLoans.isEmpty())
			return bookLoans.get(0);
		return null;
		
	}
	
	

		

}
