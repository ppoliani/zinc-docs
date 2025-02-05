---
title: "HTTP methods"
draft: false
weight: 5
---

## HTTP methods

```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.default();
    defer z.deinit();

    var router = z.getRouter();
    
    try router.get("/some-get", someGet);
    try router.post("/some-post", someGet);
    try router.put("/some-put", somePut);
    try router.delete("/some-delete", someDelete);
    try router.patch("/some-patch", somePatch);
    try router.options("/some-options", someOptions);
    try router.head("/some-head", someHead);
    try router.connect("/some-connect", someConnect);
    try router.trace("/some-trace", someTrace);

    // Add any HTTP methods to custom routeing.
    try router.addAny(&.{.GET, .HEAD}, "/assets", assets);

    try z.run();
}

```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples/tree/main/examples/serving-static-files).

