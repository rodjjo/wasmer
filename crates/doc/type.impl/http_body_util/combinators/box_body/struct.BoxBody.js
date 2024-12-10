(function() {var type_impls = {
"wasmer_wasix":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Body-for-BoxBody%3CD,+E%3E\" class=\"impl\"><a href=\"#impl-Body-for-BoxBody%3CD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, E&gt; Body for BoxBody&lt;D, E&gt;<div class=\"where\">where\n    D: Buf,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Data\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Data\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Data</a> = D</h4></section></summary><div class='docblock'>Values yielded by the <code>Body</code>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = E</h4></section></summary><div class='docblock'>The error type this <code>Body</code> might generate.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_frame\" class=\"method trait-impl\"><a href=\"#method.poll_frame\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll_frame</a>(\n    self: <a class=\"struct\" href=\"wasmer_wasix/syscalls/struct.Pin.html\" title=\"struct wasmer_wasix::syscalls::Pin\">Pin</a>&lt;&amp;mut BoxBody&lt;D, E&gt;&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"wasmer_wasix/syscalls/struct.Context.html\" title=\"struct wasmer_wasix::syscalls::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"wasmer_wasix/syscalls/enum.Poll.html\" title=\"enum wasmer_wasix::syscalls::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Frame&lt;&lt;BoxBody&lt;D, E&gt; as Body&gt;::Data&gt;, &lt;BoxBody&lt;D, E&gt; as Body&gt;::Error&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Attempt to pull out the next data buffer of this stream.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_end_stream\" class=\"method trait-impl\"><a href=\"#method.is_end_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">is_end_stream</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns <code>true</code> when the end of stream has been reached. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; SizeHint</h4></section></summary><div class='docblock'>Returns the bounds on the remaining length of the stream. <a>Read more</a></div></details></div></details>","Body","wasmer_wasix::runners::body::Body"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BoxBody%3CD,+E%3E\" class=\"impl\"><a href=\"#impl-BoxBody%3CD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, E&gt; BoxBody&lt;D, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>&lt;B&gt;(body: B) -&gt; BoxBody&lt;D, E&gt;<div class=\"where\">where\n    B: Body&lt;Data = D, Error = E&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    D: Buf,</div></h4></section></summary><div class=\"docblock\"><p>Create a new <code>BoxBody</code>.</p>\n</div></details></div></details>",0,"wasmer_wasix::runners::body::Body"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BoxBody%3CD,+E%3E\" class=\"impl\"><a href=\"#impl-Debug-for-BoxBody%3CD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for BoxBody&lt;D, E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wasmer_wasix::runners::body::Body"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-BoxBody%3CD,+E%3E\" class=\"impl\"><a href=\"#impl-Default-for-BoxBody%3CD,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for BoxBody&lt;D, E&gt;<div class=\"where\">where\n    D: Buf + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; BoxBody&lt;D, E&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","wasmer_wasix::runners::body::Body"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()