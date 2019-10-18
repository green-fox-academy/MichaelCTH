const BlogPost = require('./BlogPost.js');

class Blog {
	constructor() {
		this.blogList = [];
	}

	add(blog) {
		this.blogList.push(blog);
	}

	delete(idx) {
		this.blogList = this.blogList.splice(idx, 1);
	}

	update(idx, BlogPost) {
		this.blogList[idx] = BlogPost;
	}
}

// examples
test = new Blog();
b1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.')
b2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.')
b3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.')

test.add(b1);
test.add(b2);
console.log(test.blogList);

test.delete(1);
console.log(test.blogList);

test.update(0, b3);
console.log(test.blogList);