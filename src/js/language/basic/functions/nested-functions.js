// Inner functions are also called as clousures. Inner function can access the
// variables of outer function but not otherway around.

function outside(x){



  // This can be called only from inside.
  function inside(y){
    // x comes from outer function.
    console.log(x + y);
  }

  return inside;
}

  fn_inside = outside(5);
  fn_inside(4); // Returns 9.

  /* Note - Notice how x is preserved when inside is returned. A closure must
  /* preserve the arguments and variables in all scopes it references. Since
  /* each call provides potentially different arguments, a new closure is
  /* created for each call to outside. The memory can be freed only when the
  /* returned inside is no longer accessible. */
