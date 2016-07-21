// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by instamojo.js.
import { name as packageName } from "meteor/ankitv89:instamojo";

// Write your tests here!
// Here is an example.
Tinytest.add('instamojo - example', function (test) {
  test.equal(packageName, "instamojo");
});
