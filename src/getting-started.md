---
title: "Quickstart"
draft: false
weight: 2
---

In this quickstart, we’ll glean insights from code segments and learn how to:

## Requirements

- Zig 0.11.0 or above

## Installation

To install Zinc package, you need to install Zig and set your Zig workspace first.

1. Download and install it:

```sh
$ zig fetch --save https://github.com/zon-dev/zinc/archive/refs/tags/0.1.0.tar.gz 
```

2. Adding to `build.zig`
```zig
const zinc = b.dependency("zinc", .{
    .target = target,
    .optimize = optimize,
});
exe.root_module.addImport("zinc", zinc.module("zinc"));
```

3. Import it in your code:
```zig
const zinc = @import("zinc");
pub fn main() !void {
    const engine = zinc.Engine.default();
    _ = try engine.run();
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).

