{
  "activity": {
    "person": {
      "type": "relationDef",
      "cardinality": "one",
      "join": "person",
      "on": {
        "from": {"table": "activity","fields": ["pid"]},
        "to": {"table": "person","fields": ["id"]}
      }
    },
    "project": {
      "type": "relationDef",
      "cardinality": "one",
      "join": "project",
      "on": {
        "from": {"table": "activity", "fields": ["pcode"]},
        "to": {"table": "project", "fields": ["code"]}
      }
    }
  },
  "person": {
    "activity": {
      "type": "relationDef",
      "cardinality": "many",
      "join": "activity",
      "on": {
        "from": {"table": "person", "fields": ["id"]},
        "to": {"table": "activity", "fields": ["pid"]}
      }
    }
  },
  "project": {
    "activity": {
      "type": "relationDef",
      "cardinality": "many",
      "join": "activity",
      "on": {
        "from": {"table": "project", "fields": ["code"]},
        "to": {"table": "activity", "fields": ["pcode"]}
      }
    }
  }
}